import styled from "styled-components";
import { ThemeInterface, Themes } from "../../../themes/themes.interface";
interface Props {
  darkMode: boolean;
}
export const StyledMain = styled.main<Props>`
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0;
  color: ${({ theme }) => theme.font};
  background-image: ${({ darkMode }) =>
    darkMode
      ? "radial-gradient(circle at 11% 37%, hsla(251,0%,28%,0.05) 0%, hsla(251,0%,28%,0.05) 50%,transparent 50%, transparent 56%,transparent 56%, transparent 100%),radial-gradient(circle at 82% 7%, hsla(251,0%,28%,0.05) 0%, hsla(251,0%,28%,0.05) 46%,transparent 46%, transparent 88%,transparent 88%, transparent 100%),radial-gradient(circle at 81% 79%, hsla(251,0%,28%,0.05) 0%, hsla(251,0%,28%,0.05) 33%,transparent 33%, transparent 89%,transparent 89%, transparent 100%),radial-gradient(circle at 68% 96%, hsla(251,0%,28%,0.05) 0%, hsla(251,0%,28%,0.05) 8%,transparent 8%, transparent 26%,transparent 26%, transparent 100%),radial-gradient(circle at 69% 20%, hsla(251,0%,28%,0.05) 0%, hsla(251,0%,28%,0.05) 84%,transparent 84%, transparent 86%,transparent 86%, transparent 100%),radial-gradient(circle at 49% 22%, hsla(251,0%,28%,0.05) 0%, hsla(251,0%,28%,0.05) 71%,transparent 71%, transparent 78%,transparent 78%, transparent 100%),radial-gradient(circle at 23% 60%, hsla(251,0%,28%,0.05) 0%, hsla(251,0%,28%,0.05) 6%,transparent 6%, transparent 40%,transparent 40%, transparent 100%),radial-gradient(circle at 86% 33%, hsla(251,0%,28%,0.05) 0%, hsla(251,0%,28%,0.05) 13%,transparent 13%, transparent 98%,transparent 98%, transparent 100%),radial-gradient(circle at 38% 60%, hsla(251,0%,28%,0.05) 0%, hsla(251,0%,28%,0.05) 15%,transparent 15%, transparent 61%,transparent 61%, transparent 100%),linear-gradient(0deg, hsl(167,0%,6%),hsl(167,0%,6%))"
      : "linear-gradient(112.5deg, rgb(214, 214, 214) 0%, rgb(214, 214, 214) 10%,rgb(195, 195, 195) 10%, rgb(195, 195, 195) 53%,rgb(176, 176, 176) 53%, rgb(176, 176, 176) 55%,rgb(157, 157, 157) 55%, rgb(157, 157, 157) 60%,rgb(137, 137, 137) 60%, rgb(137, 137, 137) 88%,rgb(118, 118, 118) 88%, rgb(118, 118, 118) 91%,rgb(99, 99, 99) 91%, rgb(99, 99, 99) 100%),linear-gradient(157.5deg, rgb(214, 214, 214) 0%, rgb(214, 214, 214) 10%,rgb(195, 195, 195) 10%, rgb(195, 195, 195) 53%,rgb(176, 176, 176) 53%, rgb(176, 176, 176) 55%,rgb(157, 157, 157) 55%, rgb(157, 157, 157) 60%,rgb(137, 137, 137) 60%, rgb(137, 137, 137) 88%,rgb(118, 118, 118) 88%, rgb(118, 118, 118) 91%,rgb(99, 99, 99) 91%, rgb(99, 99, 99) 100%),linear-gradient(135deg, rgb(214, 214, 214) 0%, rgb(214, 214, 214) 10%,rgb(195, 195, 195) 10%, rgb(195, 195, 195) 53%,rgb(176, 176, 176) 53%, rgb(176, 176, 176) 55%,rgb(157, 157, 157) 55%, rgb(157, 157, 157) 60%,rgb(137, 137, 137) 60%, rgb(137, 137, 137) 88%,rgb(118, 118, 118) 88%, rgb(118, 118, 118) 91%,rgb(99, 99, 99) 91%, rgb(99, 99, 99) 100%),linear-gradient(90deg, rgb(195, 195, 195),rgb(228, 228, 228)); background-blend-mode:overlay,overlay,overlay,normal"};
`;
