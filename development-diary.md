# How I'm Building it: <br/>[Frontend Mentor Audiophile e-Commerce website](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx)

### Table of contents

- [Day 1: Form Elements and Theme](#day-1-form-elements-and-theme)
- [Day 2: Header and Screen Monitor](#day-2-header-and-screen-monitor)
- [Day 3: Home Page Banner](#day-3-home-page-banner)
- [Day 4: Product Category Card](#day-4-product-category-card)
- [Day 5: Page Previews](#day-5-page-previews)
- [Day 6: Product Pages](#day-6-product-pages)

### Day 1: Form Elements and Theme

#### **Theme**

The first day I decided to tackle the fundamental elements of the project, namely reusable buttons, a counter, inputs and the color theme. The lattermost was accomplished by [customizing my color theme](https://tailwindcss.com/docs/customizing-colors#naming-your-colors) in `tailwind.config.js` based on the provided design system.

#### **Buttons**

Inspired by MaterialUI's way of doing things, I built the button component to be convenient and customizable. The `sx` optional property would allow me to provide addtional on-the-fly styling in case I needed a minor modification here or there and the `variant` prop allowed me to access a variety of buttons without having to build multiple components.

`buttonStyles` is an object with a `number | string` key and a `string` property that will act as our html element's className

```tsx
export default function Button({
  children,
  variant,
  sx,
}: {
  children: ReactNode
  variant: number | string
  sx?: React.CSSProperties | undefined
}) {
  return (
    <button
      className={
        'text-[1.3rem] font-bold py-[1.5rem] px-[3.2rem] uppercase w-full max-w-[60rem] tracking-[1px] ' +
        buttonStyles[variant]
      }
      style={sx}
    >
      {children}
      {variant === 3 || variant === '3' ? <ChevronRight /> : null}
    </button>
  )
}
```

<br/>

The input element was a little more intensive as I wanted to build my own client-side verification. To accomplish this, I added an `error` state variable. This is an object that has two properties: status, a `boolean` and message, a `string`. The component's styling depends on whether or not there is an active error (as determined by a blank input after focusing); a red label, error message and outline warns the user that the input is invalid.

![Audiophile website buttons, input and counter](./images/form-elements.png)

#### **Text**

I also took a similar approach to typography by building a `Text` component that wraps text and renders the text in an element with a specified tag and styling. Using the typography in the design system I built an object that has a key type (string) and a CSS property object as the value. I then use this object to plug in styles based on the type prop.

```tsx
// Text.tsx

export default function Text({
  type,
  children,
}: {
  type: string
  children: ReactNode
}) {
  let element
  const style: React.CSSProperties | undefined = {
    textTransform: 'uppercase',
    ...textStyles[type],
  }

  switch (type) {
    // ...
    case 'h6':
      element = <h6 style={style}>{children}</h6>
      break
    case 'overline':
      element = <p style={style}>{children}</p>
      break
    case 'link':
      element = (
        <p
          style={style}
          className='hover:!text-caramel transition-colors duration-300'
        >
          {children}
        </p>
      )
      break
    //...
  }

  return <>{element}</>
}
```

> In my opinion the use of a tailwind class in the link text is a bit gaudy but I can't apply styling based on element state in the style prop

<br/>

```tsx
// textStyles.ts

interface TextStyle {
  [key: string]: React.CSSProperties | undefined
}

const textStyles: TextStyle = {
  h1: {
    fontSize: '5.6rem',
    lineHeight: '5.8rem',
    letterSpacing: '0.2rem',
    fontWeight: 500,
  },
  h2: {
    fontSize: '4rem',
    lineHeight: '4.4rem',
    letterSpacing: '0.15rem',
    fontWeight: 500,
  },

  // ...
}

export default textStyles
```

```tsx
// DesktopHeader

// ...
<li>
  <a href='#'>
    <Text type={'link'}>Home</Text>
  </a>
</li>
// ...
```

<br/>

### Day 2: Header and Screen Monitor

#### **Header**

The Header component uses conditional rendering based on screen size. Using a custom hook, I attach an event listener to the window and set the state, a custom enum, based on the screen size

```tsx
// useScreenMonitor.tsx

export default function useScreenMonitor() {
  const [mobile, setMobile] = useState<DISPLAY_MODE>(
    window.innerWidth > 768
      ? DISPLAY_MODE.DESKTOP
      : window.innerWidth > 480
      ? DISPLAY_MODE.TABLET
      : DISPLAY_MODE.MOBILE
  )

  useEffect(() => {
    const handleResize = () => {
      setMobile(
        window.innerWidth > 768
          ? DISPLAY_MODE.DESKTOP
          : window.innerWidth > 480
          ? DISPLAY_MODE.TABLET
          : DISPLAY_MODE.MOBILE
      )
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return mobile
}
```

<br/>

```tsx
// Header.tsx

export default function Header() {
  let mode = useScreenMonitor()
  let element
  switch (mode) {
    case DISPLAY_MODE.DESKTOP:
      element = <DesktopHeader />
      break
    case DISPLAY_MODE.TABLET:
      element = <TabletHeader />
      break
    case DISPLAY_MODE.MOBILE:
      element = <MobileHeader />
  }
  return element
}
```

<br/>

![Audiophile responsive header GIF](./images/chrome-capture-2024-3-26.gif)

### Day 3: Home Page Banner

#### **Math!**

The tablet product banner was giving me a bit of trouble. When the screen was 481px (minimum breakpoint for a tablet), ideally the background image should take up about 140% of the container's width, however, at 768 (maximum breakpoint ...) the image looked best at about 90% or so. I tried to use the former setting but realize when the screen shrunk it wasn't exactly what I had in mind.

![768px wide audiophile tablet home page product banner](./images/home768.png)
![481px wide audiophile tablet home page product banner with width 90% fixed](./images/home481_90.png)

<br/>

The headphones in the left image are significantly smaller than the intended design. So I needed to adjust the image so that it scaled up, but not at a 1:1 ratio. It needed to grow slower than the width of the screen. I had to math it out! Using css's calc function if I found a formula, I could get my image to scale how I wanted it to. I needed the rate of change of the image in pixels or Delta p. So I used the formula for the slope of a line.

![Slope formula (y2 -y1) / (x2 - x1)](./images/slope.png)

In this formula, and when dealing with graphs in general, the dependent variable is y and the independent is x. In my case, my dependent variable is pixels (p) and dependent is width (w).

![Point slope form y = mx + b](./images/point-slope.png)

I tinkered with the dev tools to see the sizes I wanted at 481px and 768px (673 and 691 pixels, respectively) and plugged these into my equation. This gave me a slope (_m_) of 0.063. Using the point-slope form of a line (_y = mx + b_) I then solved for _b_ using _y = 673_ and _w = 481_. The final equation is _p = 0.063w + 643_. Plugging this value into the background size property using the calc function gave me an image that scaled perfectly.

```tsx
// Product.tsx

// ...
const HeaderProductStyle: { [key: string]: string } = {
  // classNames
  mobile:
    'text-center pt-[10.8rem] pb-[11.2rem] px-[2.4rem] bg-black bg-[url(./images/home/mobile/image-header.jpg)] bg-cover bg-no-repeat bg-bottom',
  tablet:
    'text-center pt-[12.6rem] pb-[16.7rem] px-[2.4rem] bg-black bg-[url(./images/home/tablet/image-header.jpg)] bg-[length:calc(100vw*0.063_+_643px)] bg-no-repeat bg-bottom',
  // ...
}

// ...
```

> w in the calc function is calculated by 100vw

<br/>

![768px wide audiophile tablet home page product banner](./images/home768.png)
![481px wide audiophile tablet home page product banner with width 90% fixed](./images/home481_90.png)
![481px wide audiophile tablet home page product banner with calculated width](./images/home481_calc.png)

> From left to right: max tablet (768), min tablet (481px) before, min tablet (481px) after

### Day 4: Product Category Card

#### **Text Component Refactor**

I keep running into this problem with Frontend Mentor projects where there is some typography that isn't in the design system, not entirely missing, but maybe just a little different. I built my _Text_ component to return the desired typography based on [it's _type_ prop](#text), but like the pseudo class problem I had, these one-off stylings resulted in less than elegant solutions. So I've decided to overhaul my _Text_ component. (Note the tense has changed because I'm currently writing this as I'm building. The previous secions were written after the fact)

I've made the _type_ prop optional for completely new custom styling not already predefined and I've added another optional prop called _sx_. This is inline css styling that I'll apply after the type styling to override it.

```tsx
export default function Text({
  type,
  children,
  className,
  sx,
}: {
  type?: string | undefined
  children: ReactNode
  className?: string
  sx?: React.CSSProperties | undefined
}) {
  let element
  const style: React.CSSProperties | undefined = {
    textTransform: 'uppercase',
    ...textStyles[type as string],
  }

  switch (type) {
    case 'h1':
      element = (
        <h1 className={className} style={{ ...style, ...sx }}>
          {children}
        </h1>
      )
      break
    // ...
  }

  return <>{element}</>
}
```

#### **Categroy Card Component**

Here is what it should look like

![Frontend mentoor Earphones category card component from design system](./images/category-card.png)

<br/>

And here is what I've built so far

![Frontend mentor Earphones category card component that I built](./images/category-card2.png)

<br/>

And here is the code

```tsx
// ...
<div className='category-card w-full max-w-[35rem] relative'>
  <img src={Earbud} alt='' className='w-[60%] mx-auto relative z-10' />
  <div className='category-card-text bg-anti-flash-white pt-[8.8rem] pb-[2.2rem] absolute w-full mx-auto bottom-[-64px] z-0'>
    <Text
      type='body'
      sx={{
        color: '#000',
        textTransform: 'uppercase',
        fontSize: '1.5rem',
        fontWeight: '700',
        letterSpacing: '0.107rem',
        textAlign: 'center',
      }}
    >
      Earphones
    </Text>
    <Button variant={3} svgSx={{ stroke: '#D87D4A' }}>
      Shop
    </Button>
  </div>
</div>
// ...
```

<br/>

However, since this component appears all over the place I have to tweak it to make it resuable. Each component will need to have a unique id, title, image, alt attribute and behavior when clicked. The id, title, image, and alt attribute I'll store in an object and use an enum type as the object property. I'll figure out the behavior once I start adding functionality to my app.

<br/>

```tsx
// dataTypes.tsx

export enum CATEGORY {
  HEADPHONES = 'headphones',
  SPEAKERS = 'speakers',
  EARBUDS = 'earbuds',
}

export const categoryData: {
  [key in CATEGORY]: { title: string; img: string; imgAlt: string }
} = {
  [CATEGORY.HEADPHONES]: {
    title: 'headphones',
    img: Headphones,
    imgAlt: 'Audiophile headphones',
  },
  [CATEGORY.SPEAKERS]: {
    title: 'speakers',
    img: Speaker,
    imgAlt: 'Audiophile speaker',
  },
  [CATEGORY.EARBUDS]: {
    title: 'earbuds',
    img: Earbuds,
    imgAlt: 'Audiophile earbbuds',
  },
}
```

<br/>

```tsx
// CategoryCard.tsx

export function CategoryCard({ type }: { type: CATEGORY }) {
  const { title, img, imgAlt } = categoryData[type]
  return (
    <div
      id={`category-card-${title}`}
      className='category-card w-full max-w-[35rem] relative'
    >
      <img src={img} alt={imgAlt} className='w-[60%] mx-auto relative z-10' />
      <div
        className='category-card-text bg-anti-flash-white pt-[8.8rem]
        pb-[2.2rem] absolute w-full mx-auto bottom-[-64px] z-0'
      >
        <Text
          type='body'
          sx={{
            color: '#000',
            textTransform: 'uppercase',
            fontSize: '1.5rem',
            fontWeight: '700',
            letterSpacing: '0.107rem',
            textAlign: 'center',
          }}
        >
          {title}
        </Text>
        <Button variant={3} svgSx={{ stroke: '#D87D4A' }}>
          Shop
        </Button>
      </div>
    </div>
  )
}
```

### Day 5: Page Previews

#### **PagePreview Components**

The original idea was to create a component that, with a prop, could render a page preview component for the three product links. However, after seeing how much customization for each one I decided that they were different enough to warrant different components.

![Page Preview cards for speakers and earbuds](/images/page-preview.png)

The next bone-headed idea (which I actually executed) was place all of my stylings, props, and element attributes in an object with a custom enum type as the key. It worked, but once I was done I didn't think it was as elegant as I expected it to be. [The entirety of this brilliant idea can be seen here](https://github.com/dorian-edwards/audiophile/blob/270b48623bb364c0943f5a3b003c3048fb49cbab/src/components/PagePreviewCard.tsx).

```tsx
// PagePreview.tsx

export default function PagePreview() {
  const display = useScreenMonitor()
  const {
    className,
    contentWrapperStyling,
    titleTextType,
    titleTextStyle,
    bodyTextStyle,
  } = pagePreviewProps[display]

  return (
    <div className={className}>
      <div className={contentWrapperStyling}>
        <div className='category-page-preview-card-title-wrapper mb-[2.4rem]'>
          <Text type={titleTextType} sx={titleTextStyle}>
            ZX9
          </Text>
          <Text type={titleTextType} sx={titleTextStyle}>
            speaker
          </Text>
        </div>
        <!-- ... -->
      </div>
    </div>
  )
}

const pagePreviewProps: PagePreviewProps = {
  [DISPLAY_MODE.DESKTOP]: {
    className:
      'category-page-preview-card w-[90%] mx-auto bg-caramel px-[2.4rem] pt-[13.3rem] pb-[12.4rem] bg-no-repeat bg-[url(./images/home/desktop/image-speaker-zx9.png),_url(./images/home/desktop/pattern-circles.svg)] bg-[size:32.7%,_900px] bg-[position:left_90px_bottom_-10px,_left_-200px_bottom_-302px]',
    contentWrapperStyling:
      'category-page-preview-card_text w-full max-w-[35rem] ml-auto',
    titleTextType: 'h1',
    titleTextStyle: { color: 'white', marginBottom: '2.4rem' },
    bodyTextStyle: undefined,
  },
  // ...
}
```

I built at least two PagePreivew components before I realized it was just be better to go the className route. TailwindCSS classes can get a little gnarly but since somethings needed a little customization it helped. For instance my major breakpoints were 480 and 768, for tablet and desktop respectively, however, at the very low end of these viewport widths, things looked a little funky. Here I could use tailwind arbitrary values

```tsx
<div class="min-[320px]:text-center max-[600px]:bg-sky-300">
  <!-- ... -->
</div>

```

This allowed me to make slight adjustments outside of the major breakpoints.

#### **Working with background images**

The trickiest part of this entire endeavor was simply trying to get the background image positioning right on all viewport sizes, especially with the ZX9 background since it's comprised of an image and an svg pattern. It took a while tinkering in the developer tools to finally come up with this gnarly line of code. Oh and that was after figuring out how to style multiple background images with tailwind 🥴.

```
  'bg-[url(./images/home/desktop/image-speaker-zx9.png),_url(./images/home/desktop/pattern-circles.svg)] bg-[size:32.7%,_900px] bg-[position:left_90px_bottom_-10px,_left_-200px_bottom_-302px]'
```

#### **Bringing it together**

After completing that I'd finished the largest, and most complex pieces of the home page so I decided to piece things together. When I went to make my first Page component, the homepage I realized I made a booboo with the header. I tied the navigation to the product banner which only appears on the home screen

```tsx
// Header.tsx

export default function Header() {
  let mode = useScreenMonitor()
  let element
  switch (mode) {
    case DISPLAY_MODE.DESKTOP:
      element = (
        <>
          <DesktopHeader />
          <Product variant='desktop' />
        </>
      )
      break
    // ...
  }
  return element
}
```

So I moved the Product component to the Homepage right below the Header which now only rendered the appropriate navbar.

```tsx
// Header.tsx
export default function Header() {
  let mode = useScreenMonitor()
  let element
  switch (mode) {
    case DISPLAY_MODE.DESKTOP:
      element = <DesktopHeader />

      break
    case DISPLAY_MODE.TABLET:
      element = <TabletHeader />

      break
    case DISPLAY_MODE.MOBILE:
      element = <MobileHeader />
  }
  return element
}
```

```tsx
// Homepage.tsx

export default function HomePage() {
  let mode = useScreenMonitor()
  return (
    <>
      <Product displayMode={mode} />
      <div className='container w-[87.2%] tablet:w-[89.7%] desktop:w-[77.1%] max-w-[111rem] mx-auto flex flex-col gap-y-[2.4rem]'>
        <div className='w-full flex flex-col justify-center items-center desktop:items-baseline desktop:flex-row  gap-y-[10rem] gap-x-[1rem] mb-[10rem] tablet:mb-[16.8rem]'>
          <CategoryCard type={CATEGORY.HEADPHONES} />
          <CategoryCard type={CATEGORY.SPEAKERS} />
          <CategoryCard type={CATEGORY.EARBUDS} />
        </div>
        <PagePreviewZX9 />
        <PagePreviewZX7 />
        <PagePreviewYX1 />
      </div>
    </>
  )
}
```

And here's how it turned out.

![Partial homepage of Frontend Mentor audiophile project](./images/homepage-incomplete.png)

### Day 6: Product Pages

#### Change of plans: Scratching the Text Component

The longer I work on the project the more I find little changes or new stylings in the typography. Moreover, the semantics don't always match up. The design systems lists the typography with headers (h1 - h6) but when these stylings are used, their semantic meaning isn't appropriate. For instance the typography for a heading on a desktop screen will be h1, which is great. But that same heading, on a smaller screen will be an h2 🤨. This in addition to the subtle changes not covered by the design system led me to add an additional sx (styling) component to my Text component which sort of works but is just, in my opinion, a tad inelegant.

Instead I decided to use Tailwind's theme customization to add custom fonts. This allows me to specify font size, line height, and font weight. And is far less convoluted than an entire component relying on objects, additional props and so on and so fort. I can use a className `text-2xl` and get three base attributes then sprinkle a color or background on top easily with another line or two. Morever, this gives me more flexibility when choosing tags. I no longer have to sacrifice semantics for styling.

```js
// tailwindconfig.js

fontSize: {
      '2xl': [
        '5.6rem',
        {
          lineHeight: '5.8rem',
          letterSpacing: '0.2rem',
          fontWeight: '700',
        },
      ],
      xl: [
        '4rem',
        {
          lineHeight: '4.4rem',
          letterSpacing: '0.15rem',
          fontWeight: '700',
        },
      ],
      lg: [
        '3.2rem',
        {
          lineHeight: '3.6rem',
          letterSpacing: '0.115rem',
          fontWeight: '700',
        },
      ],
      // ...
}
```

#### Images 😕

For the product page images, I follwed the same pattern with the product previews and made the image the background of a div element. For the 'similar items' components this allowed me to blend the image along with the light gray background color. In addition, I just found this to be simpler given the need to changes images based on screen size and how React handles image imports.

The shape of the image also sometimes changes so using a div with a background image allowed me to adjust the aspect ratio easily.

```tsx
export default function ProductImage() {
  return (
    <div
      className={`product-image__img-wrapper
     w-full bg-cover bg-center bg-no-repeat
     shrink-0 mb-[3.2rem]
     bg-[url(./images/products/product-xx99-mark-two-headphones/mobile/image-product.jpg)]
     tablet2:bg-[url(./images/products/product-xx99-mark-two-headphones/tablet/image-product.jpg)]
     desktop2:bg-[url(./images/products/product-xx99-mark-two-headphones/desktop/image-product.jpg)]
     tablet2:pb-0
     tablet2:mb-0
     tablet2:max-w-[28rem]
     desktop2:max-w-[54rem]
     aspect-square
     tablet2:aspect-[281/480]
     desktop2:aspect-[27/28] mx-auto`}
    />
  )
}
```

<br/>

It's a lot but this demonstrates how each breakpoint results in a new image for the background, and a new aspect ratio for the container. On mobile and desktop screens the primary product image is practically a square, on tablets, however, it has the aspect ratio of a portrait.

<br/>

![Headphone images on mobile, tablet, and desktop screen](./images/chrome-capture-2024-5-13.gif)

<br/>

Ultimately this page is fairly straight foward. The trickiest part is the responsive styling for the images and aspect ratio but Tailwind makes this a breeze. But now that the styling is done I have to make it all reusable by creating the props each component will need. At [this](https://github.com/dorian-edwards/audiophile/tree/417f6ac3ad7b3e597b76d96bb3f2bb4188fd0bf2/src) point all the info is hardcoded. I'm currently building an object to hold all of the app's data

<br/>

![](./images/product-desktop.png)
