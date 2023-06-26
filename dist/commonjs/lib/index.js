#!/usr/bin/env node
"use strict";
/**
 * @package SassifyPro
 *  SassifyPro is a powerful Sass/SCSS compiler designed to streamline your CSS
 * development process by compiling Sass/SCSS (Syntactically Awesome Style Sheets) into efficient
 * and browser-compatible CSS code. It provides an intuitive command-line interface and a wide
 * range of features to enhance your productivity and maintainability.
 *
 * @author codeauthor1 <codeauthor2000@gmail.com> (https://www.twitter.com/codeathor1)
 */
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("./utils/index.js");
// import { Init, Cli, DebugLogger } from './utils/index.js';
class SassifyPro {
    result;
    flags;
    // private flags: meow.TypedFlags<'help' | 'clear' | 'debug', any> &
    //   Record<'help' | 'clear' | 'debug', any>;
    cli = new index_js_1.Cli();
    init = new index_js_1.Init();
    // private debuggerLogger = new DebugLogger();
    clear;
    debug;
    constructor() {
        this.result = this.cli.run();
        this.flags = this.result.flags;
        this.clear = this.flags.clear;
        this.debug = this.flags.debug;
    }
    async run() {
        this.init.initialize();
        if (this.result.input.includes('help')) {
            this.cli.run().showHelp(0);
        }
        // if (this.flags.debug) {
        //   this.debuggerLogger.log(this.flags);
        // }
    }
}
(async () => {
    const app = new SassifyPro();
    await app.run();
})();
exports.default = SassifyPro;
