export class AccountsService{
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

        addAccount(accountName: string, status: string){
            this.accounts.push({name:accountName, status:status});
        }

        updateStatus(id: number, status: string){
            this.accounts[id].status = status;
        }


}