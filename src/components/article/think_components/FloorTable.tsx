import { tierVariant, type Floor } from "@/content/articles/ai-software-market-map/floors";

interface FloorTableProps {
  floor: Floor;
}

/**
 * Static per-floor roster table. Serves as the no-JS fallback and the content
 * source for the interactive MarketMap above. Floor 5 carries an extra Group
 * column (legacy vs. new).
 */
export default function FloorTable({ floor }: FloorTableProps) {
  const hasGroup = floor.rows.some((r) => r.group);

  return (
    <figure className="think-floortable">
      <div className="think-floortable-scroll">
        <table className="think-floortable-table">
          <thead>
            <tr>
              <th scope="col">{floor.companyHeader}</th>
              {hasGroup && <th scope="col">Group</th>}
              <th scope="col">Tier</th>
              <th scope="col">Scale</th>
              <th scope="col">{floor.moveHeader}</th>
            </tr>
          </thead>
          <tbody>
            {floor.rows.map((row) => (
              <tr key={row.company}>
                <th scope="row" className="think-floortable-company">
                  {row.company}
                </th>
                {hasGroup && (
                  <td className="think-floortable-group">{row.group ?? "—"}</td>
                )}
                <td>
                  <span
                    className="think-tier-chip"
                    data-tier={tierVariant(row.tier)}
                  >
                    {row.tier}
                  </span>
                </td>
                <td className="think-floortable-scale">{row.scale}</td>
                <td className="think-floortable-move">{row.move}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption className="think-floortable-note">{floor.note}</figcaption>
    </figure>
  );
}
