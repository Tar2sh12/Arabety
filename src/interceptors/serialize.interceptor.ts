import { UseInterceptors, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';
interface ClassConstructor{
    new (...args:any[]) // allows any class only - doesnot allow other types like string number 
}
export function serialize (dto:ClassConstructor){
    return UseInterceptors(new SerializeInterceptor(dto));
}

export class SerializeInterceptor implements NestInterceptor{
    constructor( private dto: any){}
    intercept(context: ExecutionContext, next: CallHandler<any>) :Observable<any> {
        // run smth before request is handled by the request handler 
        console.log("i'm running before the handler", context);



        return next.handle().pipe(
            map((data)=>{
                // run smth before the response is sent out 
                console.log("i'm running before the response is sent out ",data);
                return plainToClass(this.dto,data,{
                    excludeExtraneousValues:true,// this is the key that make sure that everything is working as expected
                    //  
                })
            })
        )
    }
}