import Link from 'next/link'

export default function Home() {
  return (
    <div>
    <div>
    <Link href="/subpages/page1">
        <button style={{
        background: 'hotpink',
        width: '100%',
        height: '50vh',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
      }}>Pagina1</button>
      </Link>
    </div>
    <div>
    <Link href="/subpages/page2">
        <button style={{
        background: 'Blue',
        width: '100%',
        height: '50vh',
        color: 'white',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '24px',
      }}>Pagina2</button>
      </Link>
    </div>
    </div>
  );
}
