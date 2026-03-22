import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(list: any[], search: string): any[] {
    if (!search) return list;

    search = search.toLowerCase();

    return list.filter(item =>
      item.name.toLowerCase().includes(search) ||
      item.email.toLowerCase().includes(search) ||
      item.crm.toLowerCase().includes(search) ||
      item.medicalSpeciality.toLowerCase().includes(search) ||
      item.address.state.toLowerCase().includes(search)
    );
  }

}
