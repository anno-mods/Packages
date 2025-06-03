export namespace Packages {
    export interface Base {
        "packages": Package[]
    }

    export interface Package {
        /**
         * in case of:
         *  'github_release': the GitHub releases would be the source of the package
         *  'github_branch': .download would determine what branch source download would be used (this would make .mods obsolete => auto-discover the mods/info)
         *  'direct': this .download would be a download link
         * @default 'github_release'
         */
        "type"?: PackageType;

        /**
         * Package repo name, in case other than github_*: Link to the repo, website or similar
         */
        "repo": string;

        /**
         * The package owner, in case of type github_*: GitHub repo owner
         */
        "owner": string;

        /**
         * where to find the resource
         */
        "download": string;

        /**
         * List of mods to be found in this package
         */
        "mods"?: { [id: ModGUID]: ModInfoUrl };
    }

    export type ModGUID = string; //for later expression check
    export type PackageType = 'github_release' | 'github_branch' | 'direct';
    export type VersionNumber = `${bigint}.${bigint}.${bigint}` | `${bigint}.${bigint}` | `${bigint}`;
    export type ModInfoUrl = string;
}
