v 2018-08-05-1204:
done:
  remove favorite-service.service
  remove list-view component
Issues:
- study button style and class binding
- study router and parameterized url

v 2018-08-05-0300:
Done:
- click on avatar in favorite view should bring up detail view.

v 2018-08-05-0151:
Done:
- reimplemented favList, now use a centralized user list provided by listService.

Issues:
- [solved] click on avatar in favorite view should bring up detail view.
  idea: use the liked attribute to set list item hidden, rather than create a separated favList?
- <like> button in list view and favorite view should change color when toggled.
- in detail view, let url/id sync with current user?
  check app-routing module.
- [solved] remove unused component: favorite-service, list-view component.
- [solved] removed unused code.


v 2018-08-04-2106:
Issues:
- In list view, parameterized url for detailed view only works for once? 
  But it's fine in detail view with <next> button.
  check app-routing module?
- In detail view, url doesn't update when <next> is clicked.
- [solved] In detail view, the <Like> button should toggle style (color) when clicked.
- [solved] In favorite view, can not go into detail, because favorite users are in a separated list.
  The data structure need to be re-designed. 
  Perhaps use one centralized array in list service, and add "favorite" attribute for each user?
- UI style is ugly!

