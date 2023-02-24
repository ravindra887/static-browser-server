export interface IPreviewControllerOptions {
  baseUrl: string;
  getFileContent: (filepath: string) => string | Uint8Array;
}

export class PreviewController {
  #initPromise: null | Promise<string> = null;

  constructor(private options: IPreviewControllerOptions) {}

  async #initPreview(): Promise<string> {
    return "";
  }

  /**
   * Initialize a preview and return the url at which the preview is being served
   **/
  initPreview(): Promise<string> {
    if (!this.#initPromise) {
      this.#initPromise = this.#initPreview();
    }
    return this.#initPromise;
  }
}
