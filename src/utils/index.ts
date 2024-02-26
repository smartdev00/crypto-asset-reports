import moment from "moment";

// Format special date from now using moment
export const formatDateFromNow = (date: string) => {
  return moment(date).startOf("day").fromNow();
};

export const commafy = (num: number | string | undefined) => {
  num = Number(num);
  if (num < 1 && num > 0) {
    return num;
  }
  const str = num.toFixed(2).split(".");
  if (str[0].length >= 4) {
    str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
  }
  return str.join(".");
};

export const formatPrice = (price: any) => {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};

export const formattedPriceWithoutDecimals = (price: any) => {
  const formattedPrice = price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  return formattedPrice.replace(/\.00/g, "");
};

export const formattedAmountWithSymbol = (amount: any, symbol: string) => {
  if (!amount) return "-";
  const formattedAmount = amount?.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 8,
  });

  return `${formattedAmount} ${symbol.toUpperCase()}`;
};

export const formatPercentage = (num: any) => {
  return (num / 100).toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const formatPercentageOrigin = (num: any) => {
  return num.toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

export const formatTimestampToHour = (timestamp: number) => {
  const date = new Date(timestamp);
  const hour = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hour}:${minutes}`;
}

export const formatTimestampToDayMonth = (timestamp: number) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, '0');
  const month = months[date.getMonth()];
  return `${day}.${month}`;
};
