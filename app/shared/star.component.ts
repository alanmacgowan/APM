
import { Component, OnChanges, Input, 
         SimpleChanges, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
        
        @Input() rating: number;
        starWidth: number;
        @Output() starClicked = new EventEmitter<string>();

        ngOnChanges(changes: SimpleChanges): void {
            this.starWidth = this.rating * 86 / 5;
        }

        onClick(){
            this.starClicked.emit(`Star clicked ${this.rating}`);
        }
}