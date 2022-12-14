const isString = (data: unknown): data is string => {
  return typeof data === "string";
};

interface DBConnConfig {
  host: string;
  user: string;
  password: string;
  port: number;
  database: string;
  logging: boolean;
}

interface EnvConf {
  dev: DBConnConfig;
  prod: DBConnConfig;
}

class DBConf {
  static conf: DBConf = new DBConf();
  env!: keyof EnvConf;
  envConf!: EnvConf;
  constructor() {
    this.env = process.env.NODE_ENV === "dev" ? "dev" : "dev";
    this.init();
  }
  init() {
    this.envConf = {
      dev: {
        host: "localhost",
        user: "root",
        password: "root1234",
        database: "bookshelf",
        port: 3306,
        logging: true,
      },
      prod: {
        host: "prod",
        user: "",
        password: "",
        database: "prod",
        port: 3306,
        logging: true,
      },
    };
  }
  getConf(): DBConnConfig;
  getConf(key: keyof DBConnConfig): string | number;
  getConf(key?: keyof DBConnConfig): any {
    if (isString(key) && !!key.length) {
      return this.envConf[this.env][key];
    } else {
      return this.envConf[this.env];
    }
  }
}

export default DBConf.conf;
