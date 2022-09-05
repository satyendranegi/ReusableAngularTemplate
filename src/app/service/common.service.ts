import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'
import  { environment} from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  // find(filter:{name:string}={name:''},page=3):Observable<IAutopopulateLineItems[]>{
    
  //   return this.http.get<IAutopopulateLineItems[]> (environment.baseurl+"PricingDiscount/GetSalesOrderLineItemsList?searchText=" + filter.name+"&OwnerUserGroupID="+this.OwnerUserGroupID)
  //   .pipe(
  //     tap((response:IAutopopulateLineItems[])=>{
  //       response=response
  //       .map(user => new AutopopulateLineItemsModel(user.ProductID,user.InvItemId,user.Name,user.PrimaryImageID,
  //         user.ProductNumberLabel,user.ProductNumber, user.category,user.LotNumber,user.StockItemNote,
  //         user.ExpiryDate, user.qty, user.backOrderQty,user.ProductType,user.Note,user.ItemPurchasePrice,user.ItemSalePrice,user.UnitID,user.UnitName))
  //       .filter(user => user.Name.includes(filter.name))

  //       return response;
  //     })
  //   );
  // }
  public test1(codeobject : any){
    return this.http.post(environment.baseurl+'testController/test',JSON.stringify(codeobject) , { headers: new HttpHeaders().set("Content-Type", "application/json")});
  }
  test2(SystemUserID:number,EntityMappingID:number){
    return this.http.get(environment.baseurl+"testController/test?SystemUserID=" + SystemUserID+'&EntityMappingID='+EntityMappingID);
  }
}
