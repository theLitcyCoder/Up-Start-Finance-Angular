import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})
export class Home {
  rawb0q7: string = ' '
  rawzonm: string = ' '
  raw0d0t: string = ' '
  rawhz1k: string = ' '
  rawlibt: string = ' '
  rawwnk4: string = ' '

  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Up Start Finance')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Up Start Finance',
      },
    ])
  }
}
