interface Root{
  "packages":Package[]
}

interface Package{
  "repo": string; //Github repo name
  "owner": string; //Github repo owner
  "download": string; //File to look at in releases
  "mods": ModIdent[]; //list of mod identifiers contained in this package
  "type": PackageType?;
}

type ModIdent = string; //for later expressional check
type PackageType = '';
