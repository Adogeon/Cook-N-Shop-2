<template>
  <div class="container">
    <div class="row">
    <h1> Meal Plan </h1>
  </div>
  <table class="table table-responsive table">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Breakfast</th>
        <th scope="col">Lunch</th>
        <th scope="col">Dinner</th>
      </tr>
    </thead>
    <tbody>
    <tr data-dow="1">
      <th scope="row" class="align-middle">Monday</th>
      <td>
        <ul class="list-group list-group-flush text-start">
          <li class="list-group-item border-0">No added sugar muesli, semi-skimmed milk and canned peaches(in juice)</li>
          <li class="list-group-item border-0">Small glass(150ml) orange juice</li>
        </ul>
      </td>
      <td>
        <ul class="list-group list-group-flush text-start">
          <li class="list-group-item border-0">Jacket potato with tuna mayonnaise, sweetcorn, and salad</li>
          <li class="list-group-item border-0">2 oatcase, cheese and grapes</li>
        </ul>
      </td>
      <td>
        <ul class="list-group list-group-flush text-start">
          <li class="list-group-item border-0">Chickpea and spinach curry (retail cooking sauce) with brown rice</li>
        </ul>
      </td>
    </tr>
    <tr data-dow="2">
      <th scope="row" class="align-middle">Tuesday</th>
      <td>
        <ul class="list-group list-group-flush text-start">
          <li class="list-group-item border-0">2 slices wholemeal toast with peanut butter</li>
          <li class="list-group-item border-0">Skinny latte</li>
          <li class="list-group-item border-0">Small glass(150ml) orange juice</li>
        </ul>
      </td>
      <td>
        <ul class="list-group list-group-flush text-start">
          <li class="list-group-item border-0">Chicken and wholewheat pasta salad</li>
          <li class="list-group-item border-0">4 dried apricots</li>
        </ul>
      </td>
      <td>
        <ul class="list-group list-group-flush text-start">
          <li class="list-group-item border-0">Baked salmon, new potatoes, broccoli and kale</li>
        </ul>
      </td>
    </tr>
    <tr data-dow="3">
      <th scope="row" class="align-middle">Wednesday</th>
      <td>
        <ul class="list-group list-group-flush text-start">
          <li class="list-group-item border-0">Bran flakes, semi-skimmed milk and chopped banana</li>
          <li class="list-group-item border-0">Skinny latte</li>
        </ul>
      </td>
      <td>
        <ul class="list-group list-group-flush text-start">
          <li class="list-group-item border-0">Cheese and chutney and salad on a wholemeal</li>
          <li class="list-group-item border-0">1 pear</li>
        </ul>
      </td>
      <td>
        <ul class="list-group list-group-flush text-start">
          <li class="list-group-item border-0">Vegetarian bean chili with brown rice</li>
        </ul>
      </td>
    </tr>
    <tr data-dow="4">
      <th scope="row" class="align-middle">Thursday</th>
      <td>
        <ul class="list-group list-group-flush text-start">
          <li class="list-group-item border-0">Small can of reduced sugar baked beans on 1 slice of wholemeal toast</li>
          <li class="list-group-item border-0">Skinny latte</li>
        </ul>
      </td>
      <td>
        <ul class="list-group list-group-flush text-start">
          <li class="list-group-item border-0">Lentil soup, ham salad sandwich with salad cream, on wholemeal bread</li>
          <li class="list-group-item border-0">2 tangerines</li>
        </ul>
      </td>
      <td>
        <ul class="list-group list-group-flush text-start">
          <li class="list-group-item border-0">Lean pork and pak choi stir fry with noodles</li>
        </ul>
      </td>
    </tr>
    <tr data-dow="5">
      <th scope="row" class="align-middle">Friday</th>
      <td>
        <ul class="list-group list-group-flush text-start">
          <li class="list-group-item border-0">2 fortified wheat biscuits, semi-skimmed milk and chooped banana</li>
          <li class="list-group-item border-0">Small glass(150ml) orange juice</li>
        </ul>
      </td>
      <td>
        <ul class="list-group list-group-flush text-start">
          <li class="list-group-item border-0">Houmous, rocket and red pepper on a wholemeal wrap</li>
          <li class="list-group-item border-0">Low fat yogurt, honey and cinnamon</li>
        </ul>
      </td>
      <td>
         <ul class="list-group list-group-flush text-start">
          <li class="list-group-item border-0">Fish pie, peas and green beans</li>
        </ul>
      </td>
    </tr>
    <tr data-dow="6">
      <th class="col-3">Saturday</th>
      <td>
        <ul class="list-group list-group-flush text-start">
          <li class="list-group-item border-0">Scrambled eggs, grilled tomato and 2 slices of wholemeal toast</li>
          <li class="list-group-item border-0">Small glass (150ml) orange juice</li>
        </ul>
      </td>
      <td>
        <ul class="list-group list-group-flush text-start">
          <li class="list-group-item border-0">Thin crust Margherita pizza with added vegetables and a side salad</li>
          <li class="list-group-item border-0">Fruit salad</li>
        </ul>
      </td>
      <td>
        <ul class="list-group list-group-flush text-start">
          <li class="list-group-item border-0">Spaghetti Bolognese with wholewheat spaghetti</li>
        </ul>
      </td>
    </tr>
    <tr data-dow="0">
      <th scope="row" class="align-middle">Sunday</th>
      <td>
        <ul class="list-group list-group-flush text-start">
          <li class="list-group-item border-0">Porridge with dried figs and seeds</li>
          <li class="list-group-item border-0">Tea</li>
          <li class="list-group-item border-0">Small glass (150ml) apple juice</li>
        </ul>
      </td>
      <td>
        <ul class="list-group list-group-flush text-start">
          <li class="list-group-item border-0">Roast chicken, roast potatoes, peas and carrot</li>
          <li class="list-group-item border-0">Homemade spiced rice pudding</li>
        </ul>
      </td>
      <td>
        <ul class="list-group list-group-flush text-start">
          <li class="list-group-item border-0">Cheese and onion omelette, sweet potato wedges, green salad, lemon mayonnaise</li>
        </ul>
      </td>
    </tr>
    </tbody>
  </table>
  </div>
</template>

<script>


export default {
  name:"PlanCalendar"
}
</script>