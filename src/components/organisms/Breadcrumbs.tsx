import { Link } from "react-router-dom";
import { BreadcrumbItem } from "../../types/types";

interface Props {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: Props) {
    return (
        <nav className="bg-white px-6 py-3 rounded-lg shadow border border-gray-200">
            <ol className="flex items-center space-x-2 text-sm">
                {items.map((item, index) => {
                    const isLast = index === items.length - 1;

                    return (
                        item.label &&
                        <li key={index} className="flex items-center">
                            {!isLast ? (
                                <Link
                                    to={item.path!}
                                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
                                >
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-blue-600 font-semibold">
                                    {item.label}
                                </span>
                            )}

                            {!isLast && (
                                <span className="mx-2 text-gray-400">/</span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}