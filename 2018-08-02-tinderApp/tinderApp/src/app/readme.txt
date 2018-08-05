known issues (2018-08-04 2106):
- In list view, parameterized url for detailed view only works for once? 
  But it's fine in detail view with <next> button.
  check app-routing module?
- In detail view, url doesn't update when <next> is clicked.
- In detail view, the <Like> button should toggle style (color) when clicked.
- In favorite view, can not go into detail, because favorite users are in a separated list.
  The data structure need to be re-designed. 
  Perhaps use one centralized array in list service, and add "favorite" attribute for each user?
- UI style is ugly!

