export function SearchForm() {
  return (
    <div className="content__search-wrap">
      <form action="/" method="get" className="search-form" role="search">
        <label htmlFor="search" className="visually-hidden">
          Поиск
        </label>
        <input
          id="search"
          name="q"
          type="search"
          placeholder="Поиск"
          className="search-form__input"
        />
      </form>
    </div>
  );
}
