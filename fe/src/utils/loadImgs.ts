import goodStorage from "good-storage";
const IMAGE_KEY = "IMAGE_LIST";
export class LoadImgs {
  static imgMap: Record<string, string> = {};
  static init() {
    this.imgMap = goodStorage.get(IMAGE_KEY, {});
    if (this.isEmpty()) {
      this.loadAllImgs();
      goodStorage.set(IMAGE_KEY, this.imgMap);
    }
  }
  static isEmpty() {
    return !Object.getOwnPropertyNames(this.imgMap).length;
  }
  static loadAllImgs() {
    const allImgs = import.meta.glob("../assets/img/**/*.png", { eager: true });
    Object.entries(allImgs).forEach(([relativePath, img]: [string, any]) => {
      const absolutePath = img.default;
      const imgName = absolutePath.slice(absolutePath.lastIndexOf("/") + 1);
      this.imgMap[imgName] = img.default;
    });
    console.log("all", { allImgs, imgMap: this.imgMap });
  }
  static getImg(imgName: string = "") {
    return this.imgMap[imgName];
  }
}
