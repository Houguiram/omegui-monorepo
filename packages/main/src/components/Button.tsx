import type { ComponentProps } from "react";
import { styled, Button as TamaguiButton } from "tamagui";

//TODO fix ts import issues
import { TamaguiComponent } from "@tamagui/core";

// TODO support outline and other variants
//@ts-ignore
const CustomButton = styled(TamaguiButton, {
  name: "Button",
  disabledStyle: {
    opacity: 0.5,
  },
  backgroundColor: "$background2",
  hoverStyle: {
    backgroundColor: "$background3",
    borderColor: "transparent",
  },
  pressStyle: {
    scale: 0.95,
    backgroundColor: "$background3",
  },
  focusStyle: {
    backgroundColor: "$background3",
  },
  // borderColor: convertedFullTheme.neutral,
  // borderColorHover: convertedFullTheme.neutral,
  // color: convertedFullTheme.foreground,
  // colorHover: convertedFullTheme.foreground,
  // colorPress: convertedFullTheme.foreground,
  // colorFocus: convertedFullTheme.foreground,
  variants: {
    variant: {
      primary: {
        color: "$primaryContent",
        backgroundColor: "$primary",
        pressStyle: {
          backgroundColor: "$primary2",
        },
        focusStyle: {
          backgroundColor: "$primary2",
        },
        hoverStyle: {
          backgroundColor: "$primary2",
        },
      },
      neutral: {
        color: "$neutralContent",
        backgroundColor: "$neutral",
        pressStyle: {
          backgroundColor: "$neutral2",
        },
        focusStyle: {
          backgroundColor: "$neutral2",
        },
        hoverStyle: {
          backgroundColor: "$neutral2",
        },
      },
      secondary: {
        color: "$secondaryContent",
        backgroundColor: "$secondary",
        pressStyle: {
          backgroundColor: "$secondary2",
        },
        focusStyle: {
          backgroundColor: "$secondary2",
        },
        hoverStyle: {
          backgroundColor: "$secondary2",
        },
      },
      accent: {
        color: "$accentContent",
        backgroundColor: "$accent",
        pressStyle: {
          backgroundColor: "$accent2",
        },
        focusStyle: {
          backgroundColor: "$accent2",
        },
        hoverStyle: {
          backgroundColor: "$accent2",
        },
      },
      info: {
        color: "$infoContent",
        backgroundColor: "$info",
        pressStyle: {
          backgroundColor: "$info2",
        },
        focusStyle: {
          backgroundColor: "$info2",
        },
        hoverStyle: {
          backgroundColor: "$info2",
        },
      },
      success: {
        color: "$successContent",
        backgroundColor: "$success",
        pressStyle: {
          backgroundColor: "$success2",
        },
        focusStyle: {
          backgroundColor: "$success2",
        },
        hoverStyle: {
          backgroundColor: "$success2",
        },
      },
      warning: {
        color: "$warningContent",
        backgroundColor: "$warning",
        pressStyle: {
          backgroundColor: "$warning2",
        },
        focusStyle: {
          backgroundColor: "$warning2",
        },
        hoverStyle: {
          backgroundColor: "$warning2",
        },
      },
      error: {
        color: "$errorContent",
        backgroundColor: "$error",
        pressStyle: {
          backgroundColor: "$error2",
        },
        focusStyle: {
          backgroundColor: "$error2",
        },
        hoverStyle: {
          backgroundColor: "$error2",
        },
      },
    },
    // size: {
    //   small: {
    //     height: 36,
    //     fontSize: 14,
    //     paddingHorizontal: 12,
    //     paddingVertical: 8,
    //   },
    //   default: {
    //     height: 44,
    //     fontSize: 16,
    //     paddingHorizontal: 16,
    //     paddingVertical: 12,
    //   },
    // },
    // fullWidth: {
    //   true: {
    //     width: '100%',
    //   },
    // },
  } as const,
  // defaultVariants: {
  // variant: 'primary',
  // size: 'default',
  // },
});

type ButtonProps = ComponentProps<typeof CustomButton>;
// This is necessary to avoid using tamagui's button variant as we can't easily remove it
type ModifiedButtonProps = Omit<ButtonProps, "variant" | "chromeless"> & {
  variant?: Exclude<ButtonProps["variant"], "outlined">;
};

const ModifiedButton: React.FC<ModifiedButtonProps> = (props) => {
  return <CustomButton {...props} />;
};

export { ModifiedButton as Button };
