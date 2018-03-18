/* tslint:disable */
/* tslint:enable:member-ordering */
(() => {
  class StaticFields {
    private static private: boolean = true
    protected static protected: boolean = true
    public static public: boolean = false
  }

  class InstanceFields {
    private private: boolean = true
    protected protected: boolean = true
    public public: boolean = false
  }

  class Constructor {
    public method () {
      return 1
    }

    public constructor (private readonly val: boolean) {}
  }

  class StaticMethod {
    private static private () { return 1 }
    protected static protected () { return 1 }
    public static public () { return 1 }
  }

  class InstanceMethod {
    private private () { return 1 }
    protected protected () { return 1 }
    public public () { return 1 }
  }

  class AllWrong {
    public method () { return 1 }
    public static method () { return 1 }
    public property: number = 1
    public static property: number = 1
    public constructor (private readonly val: boolean) {}
  }

  class Alphabetize {
    public static second: number = 1
    public static first: number = 2
  }
})
