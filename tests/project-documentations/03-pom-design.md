
**POM**
playwright-codebase/
│
├── tests/
│   │
│   ├── pages/
│   │   ├── BasePage.ts
│   │   ├── LoginPage.ts
│   │   ├── DashboardPage.ts
│   │   ├── UsersPage.ts
│   │   ├── AddUserPage.ts
│   │   └── ProfilePage.ts
│   │
│   ├── fixtures/
│   │   └── test.fixture.ts
│   │
│   ├── api/
│   │   ├── AuthAPI.ts
│   │   ├── UserAPI.ts
│   │   └── TodoAPI.ts
│   │
│   ├── data/
│   │   ├── users.data.ts
│   │   └── login.data.ts
│   │
│   ├── utils/
│   │   ├── testData.ts
│   │   ├── dateUtils.ts
│   │   └── common.ts
│   │
│   ├── types/
│   │   ├── user.type.ts
│   │   └── api.type.ts
│   │
│   └── specs/
│       │
│       ├── auth/
│       │   └── login.spec.ts
│       │
│       ├── users/
│       │   ├── create-user.spec.ts
│       │   ├── edit-user.spec.ts
│       │   ├── delete-user.spec.ts
│       │   └── user-permission.spec.ts
│       │
│       ├── dashboard/
│       │   └── dashboard.spec.ts
│       │
│       └── api/
│           └── user-api.spec.ts
│
├── playwright.config.ts
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

**Luồng kiến trúc**

                    TEST
                     │
                     ▼
              Custom Fixture
                     │
          ┌──────────┴──────────┐
          ▼                     ▼
      Page Object            API Object
          │                     │
          ▼                     ▼
        UI App                REST API


**Bên trong UI**
Test
 │
 ├── LoginPage
 │
 ├── DashboardPage
 │
 └── UsersPage
        │
        ├── locator
        ├── fill
        ├── click
        ├── select
        └── business action


**spec**: mô tả business flow
**Page Object**: UI interaction + locator
**Fixture**: khởi tạo và chia sẻ dependency
**Utils/Data**: test data và helper.

**Triển khai theo thứ tự**: Page Object → BasePage → Fixture → Test Data → API layer → Types/Utils