import { useEstablishments } from "../../hooks/useEstablishments";
import GeneralCollection from "../templates/GeneralCollection";


interface BookSelectorModalProps {
    open: boolean;
    cognitoUserId: string;
    onClose: () => void;
    onSelect: (book: { id: string; title: string }) => void;
}

export function BookSelectorModal({
    open,
    cognitoUserId,
    onClose,
    onSelect,
}: BookSelectorModalProps) {
    const { establishments, loading: establishmentsLoading } = useEstablishments(cognitoUserId!);

    const onSelectEstablishment = (establishmentId?: string) => {
        console.log("Seleccionado establecimiento:", establishmentId);
    }

    if (!open) return null;

    if (establishmentsLoading) return <p>Cargando establecimientos...</p>;

    return (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl w-full max-w-4xl p-6 shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold text-gray-700">
                        Seleccionar libro
                    </h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        ✕
                    </button>
                </div>

                <div className="grid grid-cols-4 gap-4 h-96">
                    <div className="border rounded-lg p-2 overflow-y-auto">
                        <p className="text-sm font-medium mb-2">Establecimientos</p>
                        <GeneralCollection
                            elements={establishments}
                            elementType="establecimientos"
                            buttons={[
                                { text: 'Seleccionar', onClick: onSelectEstablishment },
                            ]}
                            isSearchable
                            isPaginated
                        />
                    </div>

                    <div className="border rounded-lg p-2 overflow-y-auto">
                        <p className="text-sm font-medium mb-2">Niveles</p>
                    </div>

                    <div className="border rounded-lg p-2 overflow-y-auto">
                        <p className="text-sm font-medium mb-2">Asignaturas</p>
                    </div>

                    <div className="border rounded-lg p-2 overflow-y-auto">
                        <p className="text-sm font-medium mb-2">Libros</p>

                        {/* Ejemplo de selección */}
                        <button
                            onClick={() =>
                                onSelect({ id: "123", title: "Álgebra I" })
                            }
                            className="w-full text-left px-2 py-1 rounded hover:bg-blue-50"
                        >
                            Álgebra I
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
