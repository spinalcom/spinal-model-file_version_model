import { Model } from 'spinal-core-connectorjs_type';
export declare class FileVersionModel extends Model {
    versionId: spinal.Val;
    ptr: spinal.Ptr<spinal.Path>;
    date: spinal.Val;
    description: spinal.Str;
    filename: spinal.Str;
    items?: spinal.Lst<any>;
    state?: spinal.Val;
    constructor(version?: number, target?: number | spinal.Model, filename?: string);
}
export declare class FileVersionContainerModel extends Model {
    current: spinal.Ptr<spinal.Path>;
    currentID: spinal.Val;
    versionLst: spinal.Lst<FileVersionModel>;
    currentVersion: spinal.Ptr<FileVersionModel>;
    static createFileVersion(file: spinal.File<any>): FileVersionContainerModel;
    static getVersionModelFromFile(file: spinal.File<any>): Promise<FileVersionContainerModel>;
    constructor(filePtr?: spinal.Ptr<spinal.Path>, filename?: string);
    addVersion(path: number | spinal.Path, filename: string, setAsCurrent?: boolean): FileVersionModel;
    setVersionById(versionId: number | spinal.Val): boolean;
    removeVersionById(versionId: number | spinal.Val): boolean;
    getDescriptionById(versionId: number | spinal.Val): spinal.Str;
}
