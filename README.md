# SETUOPROJ

npx create-react-app <project name>
cd <project name>
npm start or npm run start or npm react-scripts start
auto open browser localhost:3000

# ABOUT PROJECT

other code/Dependencies อยู่ใน node_modules

- ลบทิ้งได้
- ติดตั้งใหม่ด้วย npm install จะทำการติดตั้ง
  dependencies ที่อยู่ใน package.json ให้ Auto
- Code เราเอง อยู่ใน src/
  npm install // npm uninstall
  npm start // npm run start //

# Cleanup project ลบส่วนที่ไม่จำเป็น

# CSS Global Reset

# Color

4 : App Layout (or Page layout)
วาง layout ของหน้าหลัก (ในที่นี้เรามี 1 หน้า)
ในไฟล์ App.js วาง markup สำหรับทำ layout

# สร้างไฟล์ App.scss

ไฟล์ App.scss : เขียน css สำหรับจัด layout

$header-height: 44px;
$sidebar-width: 300px;

.todo {
display: grid;
grid-template-rows: $header-height calc(100vh - $header-height);
grid-template-columns: $sidebar-width calc(100vw - $sidebar-width);

    &__header {
        grid-column: 1/3;
        grid-row: 1/2;
    }

    &__sidebar {
        grid-row: 2/3;
        grid-column: 1/2;
        // position: sticky;
    }

    &__content {
        grid-row: 2/3;
        grid-column: 2/3;

        // other css
        overflow-y: scroll;
        padding: 20px 30px;
        padding-top: 0;
    }

}

ไฟล์ App.scss : ปรับนามสกุลไฟล์ เป็น App.module.scss
หากมี error จากการหา variable ไม่เจอ : ให้ import global css เข้ามาใช้งาน
ไฟล์ App.jsx : implement styles ลงไฟล์ App.jsx

import styles from 'App.module.scss';

<div className={styles.todo}>
    <div className={styles.todo__header}>Header</div>
    <div className={styles.todo__sidebar}>SideBar</div>
    <div classNAme={styles.todo__content}>TodoContent</div>
</div>;

# 5.1.2 : Search

สร้างไฟล์ Search.jsx
สร้างไฟล์ Search.module.scss

import { FaSearch } from 'react-icons/fa';

  <header className="header">
          <div className="header__logo"></div>
          <div className="header__text"></div>
          <div className="header__search"></div>
        </header>
