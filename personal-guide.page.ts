import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from '@services/utils.service';

@Component({
  selector: 'app-personal-guide',
  templateUrl: './personal-guide.page.html',
  styleUrls: ['./personal-guide.page.scss'],
})
export class PersonalGuidePage implements OnInit {
  isAndroid = true;

  constructor(private router: Router, private utils: UtilsService) {}

  ngOnInit() {}

  navigateTo(path: string) {
    this.router.navigateByUrl(`/tabs/personal-guide/${path}`);
  }

  openLink(url: string) {
    this.utils.openLink(url);
  }
}
