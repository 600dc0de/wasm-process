// Dependency Manager for WASM modules
class DependencyManager {
    constructor() {
        this.dependencies = new Map();
        this.installedPackages = new Map();
    }

    // Register a dependency for a specific language
    registerDependency(language, packageName, version = 'latest') {
        if (!this.dependencies.has(language)) {
            this.dependencies.set(language, new Map());
        }

        const langDeps = this.dependencies.get(language);
        langDeps.set(packageName, {
            version,
            status: 'registered',
            installedAt: null
        });

        return {
            language,
            package: packageName,
            version,
            status: 'registered'
        };
    }

    // Mark a dependency as installed
    markAsInstalled(language, packageName) {
        if (!this.dependencies.has(language)) {
            return { success: false, error: 'Language not found' };
        }

        const langDeps = this.dependencies.get(language);
        if (!langDeps.has(packageName)) {
            return { success: false, error: 'Package not found' };
        }

        const dep = langDeps.get(packageName);
        dep.status = 'installed';
        dep.installedAt = new Date().toISOString();

        const key = `${language}:${packageName}`;
        this.installedPackages.set(key, dep);

        return { success: true, package: packageName, language };
    }

    // Get all dependencies for a language
    getDependencies(language) {
        if (!this.dependencies.has(language)) {
            return [];
        }

        const langDeps = this.dependencies.get(language);
        return Array.from(langDeps.entries()).map(([name, info]) => ({
            name,
            ...info
        }));
    }

    // Get all installed packages
    getInstalled() {
        return Array.from(this.installedPackages.entries()).map(([key, info]) => {
            const [language, name] = key.split(':');
            return { language, name, ...info };
        });
    }

    // Check if a package is installed
    isInstalled(language, packageName) {
        const key = `${language}:${packageName}`;
        return this.installedPackages.has(key);
    }

    // Remove a dependency
    removeDependency(language, packageName) {
        if (!this.dependencies.has(language)) {
            return { success: false, error: 'Language not found' };
        }

        const langDeps = this.dependencies.get(language);
        const removed = langDeps.delete(packageName);

        if (removed) {
            const key = `${language}:${packageName}`;
            this.installedPackages.delete(key);
        }

        return { success: removed };
    }

    // Get dependency statistics
    getStats() {
        const stats = {
            totalLanguages: this.dependencies.size,
            totalDependencies: 0,
            totalInstalled: this.installedPackages.size,
            byLanguage: {}
        };

        for (const [language, deps] of this.dependencies.entries()) {
            const installed = Array.from(deps.values()).filter(d => d.status === 'installed').length;
            stats.byLanguage[language] = {
                total: deps.size,
                installed,
                pending: deps.size - installed
            };
            stats.totalDependencies += deps.size;
        }

        return stats;
    }

    // Clear all dependencies for a language
    clearLanguage(language) {
        if (this.dependencies.has(language)) {
            const langDeps = this.dependencies.get(language);
            for (const packageName of langDeps.keys()) {
                const key = `${language}:${packageName}`;
                this.installedPackages.delete(key);
            }
            this.dependencies.delete(language);
            return { success: true };
        }
        return { success: false, error: 'Language not found' };
    }
}

export { DependencyManager };
