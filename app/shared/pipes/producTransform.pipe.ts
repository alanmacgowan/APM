import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'productNameTransform'
})
export class ProductTransform implements PipeTransform {

    transform(value: string, args: string) {
        return value.toLocaleUpperCase();
    }


}