CatchHotels – Playwright E2E Test Suite

GETTING STARTED
1. Install dependencies
npm install
2. Create .env
CZ_URL=https://test-fe-cz.dovolena-za-benefity.cz
PL_URL=https://test-fe-pl.dovolena-za-benefity.pl
3. Run tests in UI mode
npm run pw:ui
4. Run only CZ or only PL tests
npm run pw:cz
npm run pw:pl
6. Generate an HTML report
npm run pw:record
The report will open automatically! 

PROJECT STRUCTURE
catchhotels/
│
├── enums/                 # Country enum, URL patterns, voucher codes
├── flow/                  # High-level booking and checkout flows
├── page-objects/          # Page Object Model classes
├── tests/                 # Test specs grouped by domain
│   └── order/             # Order & checkout scenarios
├── utils/                 # Helpers (URL builder, waits)
├── test-data/             # Customer data, fixtures
├── i18n.ts                # Localized labels & messages (CZ + PL)
├── playwright.config.ts   # Playwright project setup
├── package.json           # Scripts & dependencies
└── .env                   # Environment configuration


ARCHITECTURE OVERVIEW
Playwright multi-project setup
Every test automatically runs once for CZ and once for PL.
Page Object Model (POM)
Pages encapsulate locators + actions for better readability and reuse.
Flow layer
Common flows (e.g., goToCheckout) combine multiple pages into one logical step.
Localization (i18n)
All text used in assertions and form labels is centralized in i18n.ts.
Enums for consistency
Countries, vouchers, URL patterns — strongly typed for safer tests.

AI USAGE
AI was used as a coding assistant for:
Designing test architecture and Page Object Model structure
Creating stable selectors and fallback strategies
Converting manual test scenarios into automated flows
Refactoring for readability and reliability
Debugging edge cases (timeouts, dropdowns, i18n issues)
Development remained supervised and aligned with project logic and UI behavior.


The time available for this project was very limited, so I focused on delivering a fully working, reliable multi-market E2E suite first. With more time, I would improve several areas:
1. Booking URL generation
For now, the test suite uses a small pool of pre-defined URLs. Ideally, I would fetch booking drafts directly from your internal Booking API. My original idea was to automate booking.com itself, but that would make the entire suite fully dependent on a single unstable external test.
2. More logic moved out of Page Objects
Some logic inside the Page Object classes could be transferred into dedicated helper utilities. This would make the POM cleaner, smaller, and easier to maintain.
3. Improved global configuration
A number of settings are currently inside tests or flows. With more time, I would move more configuration into the Playwright config (timeouts, tracing behavior, per-project overrides, etc.) to reduce duplication.

Overall, the project has a lot of space for improvement, but given the time constraints, the focus was on stability, clarity, and full CZ/PL coverage with clean i18n logic.