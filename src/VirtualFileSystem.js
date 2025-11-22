// Virtual File System for WASM processes
class VirtualFileSystem {
    constructor() {
        this.files = new Map();
        this.directories = new Set(['/']);
        this.currentWorkingDirectory = '/';
    }

    // Normalize path
    normalizePath(path) {
        if (!path.startsWith('/')) {
            path = this.currentWorkingDirectory + '/' + path;
        }
        // Remove double slashes and trailing slash
        path = path.replace(/\/+/g, '/').replace(/\/$/, '') || '/';
        return path;
    }

    // Get directory from path
    getDirectory(path) {
        const normalized = this.normalizePath(path);
        const lastSlash = normalized.lastIndexOf('/');
        return lastSlash === 0 ? '/' : normalized.substring(0, lastSlash);
    }

    // Create directory
    mkdir(path) {
        const normalized = this.normalizePath(path);
        if (this.directories.has(normalized)) {
            return { success: false, error: 'Directory already exists' };
        }

        // Check if parent directory exists
        const parent = this.getDirectory(normalized);
        if (parent !== '/' && !this.directories.has(parent)) {
            return { success: false, error: 'Parent directory does not exist' };
        }

        this.directories.add(normalized);
        return { success: true, path: normalized };
    }

    // Create directory recursively
    mkdirp(path) {
        const normalized = this.normalizePath(path);
        const parts = normalized.split('/').filter(p => p);
        let current = '';

        for (const part of parts) {
            current += '/' + part;
            if (!this.directories.has(current)) {
                this.directories.add(current);
            }
        }

        return { success: true, path: normalized };
    }

    // Write file
    writeFile(path, content) {
        const normalized = this.normalizePath(path);
        const dir = this.getDirectory(normalized);

        // Ensure directory exists
        if (dir !== '/' && !this.directories.has(dir)) {
            return { success: false, error: 'Directory does not exist' };
        }

        this.files.set(normalized, {
            content,
            size: new Blob([content]).size,
            createdAt: this.files.has(normalized)
                ? this.files.get(normalized).createdAt
                : new Date().toISOString(),
            modifiedAt: new Date().toISOString()
        });

        return { success: true, path: normalized };
    }

    // Read file
    readFile(path) {
        const normalized = this.normalizePath(path);
        const file = this.files.get(normalized);

        if (!file) {
            return { success: false, error: 'File not found' };
        }

        return {
            success: true,
            content: file.content,
            metadata: {
                size: file.size,
                createdAt: file.createdAt,
                modifiedAt: file.modifiedAt
            }
        };
    }

    // Check if file exists
    exists(path) {
        const normalized = this.normalizePath(path);
        return this.files.has(normalized) || this.directories.has(normalized);
    }

    // Delete file
    unlink(path) {
        const normalized = this.normalizePath(path);

        if (!this.files.has(normalized)) {
            return { success: false, error: 'File not found' };
        }

        this.files.delete(normalized);
        return { success: true };
    }

    // Remove directory
    rmdir(path) {
        const normalized = this.normalizePath(path);

        if (!this.directories.has(normalized)) {
            return { success: false, error: 'Directory not found' };
        }

        if (normalized === '/') {
            return { success: false, error: 'Cannot remove root directory' };
        }

        // Check if directory is empty
        const prefix = normalized + '/';
        for (const file of this.files.keys()) {
            if (file.startsWith(prefix)) {
                return { success: false, error: 'Directory not empty' };
            }
        }
        for (const dir of this.directories) {
            if (dir !== normalized && dir.startsWith(prefix)) {
                return { success: false, error: 'Directory not empty' };
            }
        }

        this.directories.delete(normalized);
        return { success: true };
    }

    // List directory contents
    readdir(path = '/') {
        const normalized = this.normalizePath(path);

        if (!this.directories.has(normalized)) {
            return { success: false, error: 'Directory not found' };
        }

        const prefix = normalized === '/' ? '/' : normalized + '/';
        const entries = [];

        // Find files in this directory
        for (const [filePath, fileData] of this.files.entries()) {
            if (filePath.startsWith(prefix)) {
                const relativePath = filePath.substring(prefix.length);
                if (!relativePath.includes('/')) {
                    entries.push({
                        name: relativePath,
                        type: 'file',
                        size: fileData.size,
                        modifiedAt: fileData.modifiedAt
                    });
                }
            }
        }

        // Find subdirectories
        for (const dir of this.directories) {
            if (dir !== normalized && dir.startsWith(prefix)) {
                const relativePath = dir.substring(prefix.length);
                if (!relativePath.includes('/')) {
                    entries.push({
                        name: relativePath,
                        type: 'directory'
                    });
                }
            }
        }

        return { success: true, entries };
    }

    // Change working directory
    chdir(path) {
        const normalized = this.normalizePath(path);

        if (!this.directories.has(normalized)) {
            return { success: false, error: 'Directory not found' };
        }

        this.currentWorkingDirectory = normalized;
        return { success: true, cwd: normalized };
    }

    // Get current working directory
    getcwd() {
        return this.currentWorkingDirectory;
    }

    // Get file stats
    stat(path) {
        const normalized = this.normalizePath(path);

        if (this.files.has(normalized)) {
            const file = this.files.get(normalized);
            return {
                success: true,
                type: 'file',
                size: file.size,
                createdAt: file.createdAt,
                modifiedAt: file.modifiedAt
            };
        }

        if (this.directories.has(normalized)) {
            return {
                success: true,
                type: 'directory'
            };
        }

        return { success: false, error: 'Path not found' };
    }

    // Get file system statistics
    getStats() {
        let totalSize = 0;
        for (const file of this.files.values()) {
            totalSize += file.size;
        }

        return {
            files: this.files.size,
            directories: this.directories.size,
            totalSize,
            cwd: this.currentWorkingDirectory
        };
    }

    // Clear entire file system
    clear() {
        this.files.clear();
        this.directories.clear();
        this.directories.add('/');
        this.currentWorkingDirectory = '/';
        return { success: true };
    }
}

export { VirtualFileSystem };
