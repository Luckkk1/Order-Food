# 음식 주문 앱

Live : https://luckkk1.github.io/Order-Food/

웹으로 음식 주문이 가능한 어플리케이션

1. Firebase와 rest API를 통해 교류
    1. 유저의 정보, 주문 정보, 리스팅되어있는 메뉴 정보 저장
    2. 유저의 정보 ⇒ 로그인 , 주문 정보 ⇒ 주문 결과, 리스팅메뉴 ⇒ 메뉴로 각각 전달
    
2. 로그인 기능
    1. validation 추가
    2. firebase의 user정보와 비교하여 일치하면 로그인 가능
    3. 로그인 유지기능 추가예정
    
3. 회원가입 기능
    1. 각각의 validation , form전체의 validation
    2. 회원가입하면 유저 정보 Firebase에 POST
    
4. 장바구니 기능
    1. 메뉴에서 음식 추가시 useContext를 이용하여 Order List를 업데이트시키고 장바구니에서 사용함
    2. 장바구니 안에서도 자체적으로 음식의 수량 조절가능 (0개가 될때 리스트에서 삭제)

5. 주문 결과 기능
    1. 주문을 할때 주문한 user의 key를 같이 넣어서 Firebase로 보냄 ⇒ user의 키를 가진 order값 중 가장 마지막에 있는 (최신에 주문한) order값을 출력
    2. Firebase에 저장되어있는 user 의 주소 정보를 가져와 출력
    
6. 사이드 스테이트 관리
    1. 비동기적 함수에서 api를 가져올때 아직 가져 오지 못한상태에서는 loading state를, 에러가 발생했을 때는 error state를 사용하여 각각의 상태를 모든 컴포넌트에서 관리함.
    
7. 반응형 기능
    1. 모바일크기 부터 데스크탑 용 모니터 사용까지 어떤 화면에서든지 interface가 작동되도록함.
   
