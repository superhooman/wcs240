import Container from './container'

export default function Footer() {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-16 flex flex-col lg:flex-row items-center">
          <h3 className="text-2xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Made with Next.js ❤️
          </h3>
          <div className="flex flex-col lg:flex-row justify-end items-center lg:pl-4 lg:w-1/2">
            <a
              href={`https://github.com/superhooman/wcs240`}
              className="font-bold hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </Container>
    </footer>
  )
}
