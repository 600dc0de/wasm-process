import os
import sys

def main():
    for arg in sys.argv:
        sys.stdout.write(f"arg: {arg}\n")

    for key, value in os.environ.items():
        sys.stdout.write(f"env: {key}={value}\n")

    try:
        buf = sys.stdin.read(1024)
        if buf:
            sys.stdout.write("from stdin: " + buf + "\n")
    except Exception as e:
        sys.stderr.write(f"Error reading stdin: {e}\n")

    sys.stdout.write("stdout message!\n")
    sys.stderr.write("stderr message!\n")

    code = 42 if len(sys.argv) > 1 else 0
    sys.exit(code)

if __name__ == "__main__":
    main()
