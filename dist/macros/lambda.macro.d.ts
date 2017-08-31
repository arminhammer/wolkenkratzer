import { IResource } from '../elements/resource';
import { ITemplate } from '../template';
export interface IZipLambdaResult {
    FunctionResource: IResource;
    Zip: any;
}
export interface IZipLambdaTemplateResult {
    Template: ITemplate;
    Zip: any;
}
/**
 * Create an inline Lambda function
 * @param {*} param0
 */
export declare function buildInlineLambda({path: inputPath, name, options, parameters}: {
    path: any;
    name: any;
    options: any;
    parameters: any;
}): any;
/**
 * Create a Lambda function from a folder or source file
 * @param {} param0
 */
export declare function _buildZipLambda({path: inputPath, name, options, parameters, output}: {
    path: any;
    name: any;
    options: any;
    parameters: any;
    output: any;
}): Promise<IZipLambdaResult>;
/**
 * Create a Lambda function from a folder or source file
 * @param {} param0
 */
export declare function buildZipLambda({path: inputPath, name, options, parameters, output}: {
    path: any;
    name: any;
    options: any;
    parameters: any;
    output: any;
}): Promise<IZipLambdaResult>;
/**
 * Create a Lambda function from a folder or source file
 * @param {} param0
 */
export declare function buildLambda({path: inputPath, name, options, parameters, output}: {
    path: any;
    name: any;
    options: any;
    parameters: any;
    output: any;
}): Promise<{}>;
/**
 * Create a Lambda function from a folder or source file
 * @param {} param0
 */
export declare function buildZipLambdaTemplate({path: inputPath, name, options, parameters, output}: {
    path: any;
    name: any;
    options: any;
    parameters: any;
    output: any;
}): Promise<IZipLambdaTemplateResult>;
/**
 * Create a Lambda function from a folder or source file
 * @param {} param0
 */
export declare function buildLambdaTemplate({path: inputPath, name, options, parameters, output}: {
    path: any;
    name: any;
    options: any;
    parameters: any;
    output: any;
}): Promise<{}>;
