import Link from "next/link";

export default function ExternalLink({ width, height, link }: { width?: number, height?: number, link: string }) {

    return (
        <Link target="_blank" href={link}>
            <svg
                onMouseOver={(e) => {
                    e.currentTarget.style.fill = "#0BE890";
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.fill = "#808080";
                }}
                width={width ?? 40}
                height={height ?? 40}
                fill="#808080"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path d="M10 6V8H5V19H16V14H18V20C18 20.5523 17.5523 21 17 21H4C3.44772 21 3 20.5523 3 20V7C3 6.44772 3.44772 6 4 6H10ZM21 3V11H19L18.9999 6.413L11.2071 14.2071L9.79289 12.7929L17.5849 5H13V3H21Z">
                </path>
            </svg>
        </Link>
    )

}
