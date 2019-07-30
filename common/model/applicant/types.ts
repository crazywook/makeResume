export interface ApplicantInfo {
  name: string
  email: string
  phone: string
  career: string
  // FIXME: 이미지 같은게 들어갈 수 있으니 확장성 고려해서 객체 배열로
  skillStack: string[]
  githubUrl: string
}
