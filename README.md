# AgGrid

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.0.

## How To Start

1) Clone Project
2) Run `npm i`
3) Run `ng serve` and navigate to `http://localhost:4200/`

## Task

1) Create a json file for data fetching
2) json file will contain array object with following properties (name, email, gender, active, salary)
    * Notes:- 
        ** gender will be `male/famale`
        ** active will be `true/false`
3) Do proper `model mapping`
4) Integrate `ag-grid`
5) display `ag-grid` on `active-vendor`
6) Need to perform following action on `ag-grid`
    * name should be editable
    * email should be editable 
    * gender:- should be dropdown
    * active:- should be checkbox (true = checked, false = unchecked)
    * salary:- Exa. in json we will use `31769` but in ag-grid it will looks like `31,769`

    * Note:- above mentioned functionality available in `ag-grid` so please check documentation carefully. before integrating any features.
7) [AgGrid](https://www.ag-grid.com/angular-data-grid/)
