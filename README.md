## 모바일/타블렛/데스크탑 별로 보이는 요소들 정리

| Mobile | Tablet | Desktop | class      |
| ------ | ------ | ------- | ---------- |
| O      | X      | X       | .sm-only   |
| O      | O      | X       | .lg-hidden |
| X      | O      | X       | .md-only   |
| X      | O      | O       | .sm-hidden |
| X      | X      | O       | .lg-only   |
| O      | X      | O       | .md-hidden |

# 내일의 집

### 1. GNB

- 로그인을 하지 않은 경우

```html
<div class="button-group">
  <button
    class="lg-hidden gnb-icon-btn is-search"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i class="icon-search"></i>
  </button>
  <a class="gnb-icon-btn is-cart" href="/" aria-label="장바구니 페이지로 이동">
    <i class="icon-cart"></i>
  </a>
  <div class="gnb-auth sm-hidden">
    <a href="/">로그인</a>
    <a href="/">회원가입</a>
  </div>
</div>
```

- 로그인 한 경우

```html
<div class="button-group">
  <button
    class="lg-hidden gnb-icon-btn is-search"
    type="button"
    aria-label="검색창 열기 버튼"
  >
    <i class="icon-search"></i>
  </button>

  <a
    class="sm-hidden gnb-icon-btn"
    href="/"
    aria-label="스크랩북 페이지로 이동"
  >
    <i class="icon-bookmark"></i>
  </a>

  <a class="sm-hidden gnb-icon-btn" href="/" aria-label="내소식 페이지로 이동">
    <i class="icon-bell"></i>
  </a>

  <a class="gnb-icon-btn is-cart" href="/" aria-label="장바구니 페이지로 이동">
    <i class="icon-cart"></i>
    <strong class="badge">9</strong>
  </a>

  <button
    class="gnb-avatar-btn sm-hidden"
    type="button"
    aria-label="마이메뉴 열기 버튼"
  >
    <div class="avatar-32">
      <img src="./assets/images/img-user-01.jpg" alt="user-image" />
    </div>
  </button>
</div>
```

### 2. Sidebar

- 로그인을 하지 않은 경우

```html
<div class="sidebar-auth">
  <a class="btn-outline btn-40" href="/">로그인</a>
  <a class="btn-primary btn-40" href="/">회원가입</a>
</div>
```

- 로그인 한 경우

```html
<div class="sidebar-user">
  <a href="/">
    <div class="avatar-24">
      <img src="./assets/images/img-user-01.jpg" alt="user-image" />
    </div>
    <strong class="username">사달라</strong>
  </a>
</div>
```
