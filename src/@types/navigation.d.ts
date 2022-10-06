export interface GameParams {
    id:string;
    banner:string;
    title:string;
}

export declare global {
    namespace ReactNavigation{
        interface RootParamList{
            home:undefined;
            game:GameParams
        }
    }
}