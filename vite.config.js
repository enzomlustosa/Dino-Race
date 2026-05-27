import { defineConfig } from 'vite'

const kaplayCongrats = () => {
    return {
        name: "vite-plugin-kaplay-hello",
        buildEnd() {
            process.stdout.write(`:)`);
        },
    };
};

export default defineConfig({
    // index.html out file will start with a relative path for script
    base: '/dinorace/',
    server: {
        port: 3001,
    },
    build: {
        // disable this for low bundle sizes
        sourcemap: true,
    },
    plugins: [
        // Disable messages removing this line
        kaplayCongrats(),
    ],
});