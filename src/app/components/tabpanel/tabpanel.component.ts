import { Component } from '@angular/core';
import { Employee, Service, Task } from 'src/app/services/tab-data.service';

@Component({
  selector: 'app-tabpanel',
  templateUrl: './tabpanel.component.html',
  styleUrls: ['./tabpanel.component.scss']
})
export class TabpanelComponent {

  allEmployees: Employee[];

  employees: Employee[];

  selectedIndex: number;

  tasks: Task[];

  tasksDataSourceStorage: any;

  constructor(private service: Service) {
    this.allEmployees = this.service.getEmployees();
    this.employees = this.service.getEmployees().slice(0, 3);
    this.selectedIndex = 0;
    this.tasks = this.service.getTasks();
    this.tasksDataSourceStorage = [];
  }

  onTabDragStart(e:any) {
    e.itemData = e.fromData[e.fromIndex];
  }

  onTabDrop(e:any) {
    e.fromData.splice(e.fromIndex, 1);
    e.toData.splice(e.toIndex, 0, e.itemData);
  }

  addButtonHandler() {
    const newItem = this.allEmployees.filter((employee) => this.employees.indexOf(employee) === -1)[0];

    this.selectedIndex = this.employees.length;
    this.employees.push(newItem);
  }

  closeButtonHandler(itemData:any) {
    const index = this.employees.indexOf(itemData);

    this.employees.splice(index, 1);
    if (index >= this.employees.length && index > 0) this.selectedIndex = index - 1;
  }

  showCloseButton() {
    return this.employees.length > 1;
  }

  disableButton() {
    return this.employees.length === this.allEmployees.length;
  }

  getTasks(id: number) {
    let item = this.tasksDataSourceStorage.find((i:any) => i.key === id);
    if (!item) {
      item = {
        key: id,
        dataSourceInstance: this.tasks.filter((task) => task.EmployeeID === id),
      };
      this.tasksDataSourceStorage.push(item);
    }

    return item.dataSourceInstance;
  }

  getCompletedTasks(id: number) {
    return this.tasks.filter((task) => task.EmployeeID === id).filter((task) => task.Status === 'Completed');
  }

}
