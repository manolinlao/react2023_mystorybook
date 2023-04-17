import './mylabel.css';

//size quiero que sea referente a normal,h1,h2,h3
export interface MyLabelProps {
  /**
   * This is the message to show
   */
  label: string;
  /**
   * This is the size
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';
  /**
   * if true capitalizes all the text
   */
  allCaps?: boolean;
  /**
   * color of text
   */
  color?: 'primary' | 'secondary' | 'tertiary';

  /**
   * custom font color
   */
  fontColor?: string;
}

/**
 * MyLabel component
 */
export const MyLabel = ({
  label = 'No Label',
  size = 'normal',
  allCaps = false,
  color = 'primary',
  fontColor
}: MyLabelProps) => {
  return (
    <span className={`label ${size} text-${color}`} style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
