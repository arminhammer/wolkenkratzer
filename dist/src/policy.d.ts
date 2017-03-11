export declare namespace Policy {
    /**
     * @class Policy
     */
    class Policy {
        private WKName;
        constructor(name: string);
        getName(): string;
        toJson(): any;
    }
    /**
     * @class CreationPolicy
     */
    class CreationPolicy extends Policy {
        private AutoScalingCreationPolicy;
        private ResourceSignal;
        constructor(parameters?: any);
    }
    /**
     * @class DeletionPolicy
     */
    class DeletionPolicy extends Policy {
        private Type;
        constructor(Type: string);
    }
    /**
     * @class UpdatePolicy
     */
    class UpdatePolicy extends Policy {
        constructor(parameters?: any);
    }
}
