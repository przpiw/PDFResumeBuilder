import { Link, Svg, Path } from '@react-pdf/renderer'
export const SVGItem = ({ path, url }) => (
  <Link src={url}>
    <Svg
      stroke='currentColor'
      fill='#FFF'
      strokeWidth='0'
      viewBox='0 0 448 512'
      height='24'
      width='24'
    >
      <Path d={path} />
    </Svg>
  </Link>
)
