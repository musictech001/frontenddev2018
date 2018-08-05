v 2018-08-05-0300:
Done:
- [solved] click on avatar in favorite view should bring up detail view.

v 2018-08-05-0151:
Done:
- reimplemented favList, now use a centralized user list provided by listService.

Unsolved / Todo:
- [solved] click on avatar in favorite view should bring up detail view.
  idea: use the liked attribute to set list item hidden, rather than create a separated favList?
- <like> button in list view and favorite view should change color when toggled.
- in detail view, let url/id sync with current user?
  check app-routing module.
- remove unused component: favorite-service, list-view component.
- removed unused code.


v 2018-08-04-2106:
- In list view, parameterized url for detailed view only works for once? 
  But it's fine in detail view with <next> button.
  check app-routing module?
- In detail view, url doesn't update when <next> is clicked.
- In detail view, the <Like> button should toggle style (color) when clicked.
- In favorite view, can not go into detail, because favorite users are in a separated list.
  The data structure need to be re-designed. 
  Perhaps use one centralized array in list service, and add "favorite" attribute for each user?
- UI style is ugly!

