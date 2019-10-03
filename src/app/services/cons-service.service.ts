import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsServiceService {

  public advancedSkills: any[] = [
    {
      nombre: 'Angular',
      img: 'assets/icons/angular.svg',
      link: 'https://angular.io'
    },
    {
      nombre: 'Bootstrap',
      img: 'assets/icons/bootstrap.svg',
      link: 'https://getbootstrap.com'
    },
    {
      nombre: 'CSS3',
      img: 'assets/icons/css3.svg',
      link: 'https://www.w3.org/Style/CSS/'
    },
    {
      nombre: 'HTML5',
      img: 'assets/icons/html5.svg',
      link: 'https://whatwg.org'
    },
    {
      nombre: 'Ionic 3',
      img: 'assets/icons/ionic.svg',
      link: 'https://ionicframework.com'
    },
    {
      nombre: 'SQL',
      img: 'assets/icons/sql.svg',
      link: 'https://en.wikipedia.org/wiki/SQL'
    },
    {
      nombre: 'TypeScript',
      img: 'assets/icons/typescript.svg',
      link: 'http://www.typescriptlang.org'
    }
  ];
  public mediumkills: any[] = [
    {
      nombre: 'Android',
      img: 'assets/icons/android.svg',
      link: 'https://www.android.com/intl/en_us/'
    },
    {
      nombre: 'Bitbucket',
      img: 'assets/icons/bitbucket.svg',
      link: 'https://bitbucket.org'
    },
    {
      nombre: 'Firebase',
      img: 'assets/icons/firebase.svg',
      link: 'https://firebase.google.com'
    },
    {
      nombre: 'Git',
      img: 'assets/icons/git.svg',
      link: 'https://git-scm.com'
    },
    {
      nombre: 'GitHub',
      img: 'assets/icons/github.svg',
      link: 'https://github.com'
    },
    {
      nombre: 'Google Cloud',
      img: 'assets/icons/googlecloud.svg',
      link: 'https://cloud.google.com'
    },
    {
      nombre: 'Java',
      img: 'assets/icons/java.svg',
      link: 'https://www.java.com/en/'
    },
    {
      nombre: 'JavaScript',
      img: 'assets/icons/javascript.svg',
      link: 'https://www.javascript.com'
    },
    {
      nombre: 'MongoDB',
      img: 'assets/icons/mongodb.svg',
      link: 'https://www.mongodb.com'
    },
    {
      nombre: 'MySQL',
      img: 'assets/icons/mysql.svg',
      link: 'https://www.mysql.com'
    },
    {
      nombre: 'NodeJS',
      img: 'assets/icons/nodejs.svg',
      link: 'https://nodejs.org/en/'
    },
    {
      nombre: 'phpMyAdmin',
      img: 'assets/icons/phpmyadmin.svg',
      link: 'https://www.phpmyadmin.net'
    },
    {
      nombre: 'Postman',
      img: 'assets/icons/postman.svg',
      link: 'https://www.getpostman.com'
    },
    {
      nombre: 'SQLite',
      img: 'assets/icons/sqlite.svg',
      link: 'https://www.sqlite.org/index.html'
    },
    {
      nombre: 'SQLServer',
      img: 'assets/icons/sqlserver.svg',
      link: 'https://www.microsoft.com/es-mx/sql-server/sql-server-downloads'
    }
  ];
  public basicSkills: any[] = [
    {
      nombre: 'ASP.NET',
      img: 'assets/icons/aspnet.svg',
      link: 'https://dotnet.microsoft.com/apps/aspnet'
    },
    {
      nombre: 'C#',
      img: 'assets/icons/csharp.svg',
      link: 'https://docs.microsoft.com/en-us/dotnet/csharp/index'
    },
    {
      nombre: 'PHP',
      img: 'assets/icons/php.svg',
      link: 'https://www.php.net/manual/en/intro-whatis.php'
    },
    {
      nombre: 'Unity',
      img: 'assets/icons/unity.svg',
      link: 'https://unity.com'
    }
  ];

  constructor() {
    console.log('servicio funcionando');
  }
}
