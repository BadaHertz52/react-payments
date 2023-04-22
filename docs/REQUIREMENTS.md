# 💳 페이먼츠 미션

## 기능 목록

- [x] 카드 목록
  - [x] 사용자가 카드가 없을 때 "새로운 카드를 등록해주세요" 메세지가 보인다
  - [x] 사용자가 추가한 카드를 목록에서 볼 수 있다
    - [x] 로컬 스토리지에 사용자 카드 장보 저장
- [x] 카드 추가
  - [x] 사용자가 입력 중인 정보를 카드 아이템(그래픽 요소)에서 볼 수 있다
  - [x] 카드 정보 입력 받기
    - [x] 카드 번호
      - 16자리 -> 4자리 공백으로 구분해서 입력 받는다
      - 마지막 8자리는 보안처리한다
      - 예외 사항:
        - [x] 숫자가 아닌 문자를 입력한 경우
        - [x] 16자리를 모두 입력하지 않은 경우
    - [x] 만료일
      - MM/YY
      - 예외 사항:
        - [x] 현재 날짜 기준에서 지난 MM/YY를 입력한 경우
        - [x] 숫자가 아닌 문자를 입력한 경우
        - [x] MM/YY 4자리 숫자를 입력하지 않은 경우
        - [x] MM이 (01~12) 사이가 아닌 경우
        - [x] YY가 현재 년도 기준으로 5년 이하가 아닌 경우
    - [x] 카드 소유자 이름 (선택)
      - 예외 사항:
        - [x] 영어가 아닌 문자를 입력한 경우
        - [x] 30자 이상을 입력한 경우
    - [x] 보안 코드
      - 아메리칸 익스프레스: 4자리
      - 비자/마스터카드: 3자리
      - 예외 사항:
        - [x] 숫자가 아닌 문자를 입력한 경우
        - [x] 입력 값의 길이가 3~4자리가 아닌 경우
    - [x] 카드 비밀번호
      - 앞 두자리 (각각 입력 받는다)
      - 입력 값을 보안 처리한다
      - 예외 사항:
        - [x] 숫자가 아닌 문자를 입력한 경우
        - [x] 두자리 모두 입력하지 않은 경우
  - [x] 모든 입력 값이 유효한 경우에 "완료" 버튼이 나타난다
  - [x] "완료" 버튼을 클릭하면 사용자 카드 목록에 카드가 추가된다