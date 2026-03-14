import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tree-view',
  imports: [CommonModule, RouterLink],
  templateUrl: './tree-view.html',
  styleUrl: './tree-view.scss',
})
export class TreeView {
  @Input() node!: any;

  toggle() {
    if (this.node.children && this.node.children.length > 0) {
      this.node.isOpen = !this.node.isOpen;
    }
  }
}
