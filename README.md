# REMO AI Vibe Coding Lab

![REMO AI Vibe Coding Lab](https://img.shields.io/badge/Status-Live-success)
![License](https://img.shields.io/badge/License-MIT-blue)

## 🎯 프로젝트 소개

**REMO AI Vibe Coding Lab**은 변리사, 변호사, 의료진 등 고급 전문직을 위한 AI 실무 마스터 클래스 랜딩 페이지입니다.

### 주요 특징
- 💼 전문직 특화 AI 교육 프로그램
- 🎓 소규모 정예 교육 (2-4명)
- 🚀 바이브코딩(Vibe Coding) 방법론
- 📱 반응형 디자인

## 🌐 라이브 사이트

**배포 URL**: `https://[username].github.io/remo-ai-vibe-coding-lab/`

## 🛠️ 기술 스택

- **HTML5**: 시맨틱 마크업
- **Tailwind CSS**: 유틸리티 기반 스타일링
- **Chart.js**: 데이터 시각화
- **Formspree**: 이메일 폼 처리
- **GitHub Pages**: 무료 호스팅

## 📦 파일 구조

```
remo-ai-vibe-coding-lab/
├── index.html          # 메인 랜딩 페이지
├── README.md           # 프로젝트 문서
└── .gitignore          # Git 제외 파일
```

## 🚀 로컬 실행 방법

### 방법 1: 브라우저에서 직접 열기
```bash
# index.html 파일을 더블클릭하거나
# 브라우저로 드래그 앤 드롭
```

### 방법 2: 로컬 서버 실행 (권장)
```bash
# Python 3가 설치되어 있다면
python -m http.server 8000

# 브라우저에서 http://localhost:8000 접속
```

### 방법 3: VS Code Live Server
```bash
# VS Code에서 index.html 열기
# 우클릭 → "Open with Live Server"
```

## 📧 이메일 폼 설정

이메일 폼을 활성화하려면 Formspree 설정이 필요합니다:

1. [Formspree.io](https://formspree.io)에서 무료 계정 생성
2. 새 폼 생성 후 Form ID 받기
3. `index.html` 537번째 줄의 `YOUR_FORM_ID`를 받은 ID로 교체:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

→

```javascript
const response = await fetch('https://formspree.io/f/xyzabc12', {
```

## 🎨 커스터마이징

### 색상 변경
`index.html`의 CSS 변수 수정:
```css
:root {
    --primary-blue: #002D5B;
    --accent-blue: #0056b3;
    --light-bg: #f8fafc;
}
```

### 내용 수정
- **회사 정보**: 460-472번째 줄
- **교육 일정**: 420-422번째 줄
- **가격 정보**: 162번째 줄, 377-392번째 줄

## 📝 배포 가이드

자세한 배포 방법은 [GitHub Pages 배포 가이드](./github_pages_deployment_guide.md)를 참고하세요.

### 빠른 배포 단계
1. GitHub 저장소 생성 (Public)
2. `index.html` 파일 업로드
3. Settings → Pages → Source: main branch
4. 1-2분 후 배포 완료!

## 🔧 유지보수

### 내용 업데이트
1. GitHub에서 `index.html` 파일 수정
2. Commit changes
3. 1-2분 후 자동 반영

### Git으로 관리
```bash
git clone https://github.com/[username]/remo-ai-vibe-coding-lab.git
cd remo-ai-vibe-coding-lab

# 수정 후
git add .
git commit -m "Update content"
git push origin main
```

## 📊 기능 목록

- [x] 반응형 네비게이션
- [x] 히어로 섹션
- [x] 비전 섹션 (레이더 차트)
- [x] 타임테이블 (변리사/의료진/개발자)
- [x] 차별점 소개
- [x] 신청 폼 (Formspree 연동)
- [x] 모달 피드백
- [x] 부드러운 스크롤

## 🌟 향후 계획

- [ ] Google Analytics 추가
- [ ] SEO 최적화
- [ ] 다국어 지원 (영어)
- [ ] 블로그 섹션 추가
- [ ] 수강생 후기 섹션

## 📞 문의

- **이메일**: ekbae8765@remo.re.kr
- **웹사이트**: [remo.re.kr](https://remo.re.kr)
- **회사**: 주식회사 리모

## 📄 라이선스

MIT License - 자유롭게 사용, 수정, 배포 가능합니다.

---

**Made with ❤️ by REMO**
