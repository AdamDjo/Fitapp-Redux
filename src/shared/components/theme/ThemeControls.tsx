import { ColorPicker } from "./ColorPicker";
import { LayoutControls } from "./LayoutControls";
import { ThemeToggle } from "./ThemeToggle";

export function ThemeControls() {
 return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">🎨 Paramètres du Thème</h3>
      </div>
      <div className="card-content">
        <div className="space-y-6">
          <div className="controls-section">
            <h4>Mode d'affichage</h4>
            <ThemeToggle />
          </div>
          
          <ColorPicker />
          
          <div className="controls-section">
            <h4>Interface</h4>
            <LayoutControls />
          </div>
        </div>
      </div>
    </div>
  )
}