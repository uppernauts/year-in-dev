<script>
  export let onYearSelected;
  export let selectedYear;

  let years = [
    { id: 2020, text: "2020" },
    { id: 2019, text: "2019" },
    { id: 2018, text: "2018" }
  ];
</script>

<style>
  .selectdiv {
    position: relative;
    width: 100%;
  }

  /*To remove button from IE11, thank you Matt */
  select::-ms-expand {
    display: none;
  }

  .selectdiv:after {
    content: "<>";
    font: 17px "Consolas", monospace;
    color: white;
    -webkit-transform: rotate(90deg);
    -moz-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(90deg);
    right: 11px;
    /*Adjust for position however you want*/

    top: 13px;
    padding: 0 0 2px;
    /*left line */

    position: absolute;
    pointer-events: none;
  }

  .selectdiv select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    /* Add some styling */

    display: block;
    width: 100%;
    height: 40px;
    float: right;
    margin: 5px 0px;
    padding: 0px 12px;
    font-size: 16px;
    line-height: 1.75;
    color: white;
    background-color: #667EEA;
    background-image: none;
    border: 1px solid #667EEA;
    -ms-word-break: normal;
    word-break: normal;
  }
</style>

<div class="selectdiv">
  <label>
    <select
      class="bg-transparent classic rounded-lg"
      value={selectedYear}
      on:change={onYearSelected}>
      {#each years as year}
        <option value={year.id}>{year.text}</option>
      {/each}
    </select>
  </label>
</div>
