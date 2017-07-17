import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class AccountsService{

  constructor(private loggerService: LoggingService){}
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

      statusUpdated = new EventEmitter<string>();

      addAccount(accountName: string, status: string){
          this.accounts.push({name:accountName, status:status});
          this.loggerService.logStatusChange( status );
      }

      updateStatus(id: number, status: string){
          this.accounts[id].status = status;
          this.loggerService.logStatusChange( status );
      }


}